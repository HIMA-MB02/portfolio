import { useCallback, useEffect, useRef, useState } from "react"
import { useTransition } from "react-spring"
import { StyledAnimatedDiv, StyledContainer, StyledMain } from "./styles"
import { animated } from "react-spring";
import { useTheme } from "styled-components";

export default function UppercaseTransition() {
    const ref = useRef<ReturnType<typeof setTimeout>[]>([])
    const theme = useTheme()
    const [items, set] = useState<string[]>([])
    const [innerHeightValue, setInnerHeightValue] = useState(50)

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1440) {
          setInnerHeightValue(80)
        } else if (window.innerWidth >= 1024) {
          setInnerHeightValue(70)
        } else if (window.innerWidth >= 768) {
          setInnerHeightValue(60) 
        } else {
          setInnerHeightValue(50)
        }
      }

      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])

    const transitions = useTransition(items, {
      from: {
        opacity: 0,
        height: 0,
        innerHeight: 0,
        transform: 'perspective(600px) rotateX(0deg)',
        color: theme.color.primary,
      },
      enter: [
        { opacity: 1, height: innerHeightValue, innerHeight: innerHeightValue },
        { transform: 'perspective(600px) rotateX(180deg)', color: theme.color.secondary },
        { transform: 'perspective(600px) rotateX(0deg)', color: theme.color.secondary },
      ],
      leave: [{ color: theme.color.red }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
      update: { color: theme.color.secondary},
      loop: true
    })
  
    const reset = useCallback(() => {
      ref.current.forEach(clearTimeout)
      ref.current = []
      set([])
      ref.current.push(setTimeout(() => set(['Design', 'Develop', 'Iterate']), 1500))
      ref.current.push(setTimeout(() => set(['Design', 'Develop']), 4000))
      ref.current.push(setTimeout(() => set(['Design', 'Develop', 'Deliver']), 5500))
      ref.current.push(setTimeout(() => reset(), 8500))
    }, [])
  
    useEffect(() => {
      reset()
      return () => ref.current.forEach(clearTimeout)
    }, [reset])
  
    return (
      <StyledContainer>
        <StyledMain>
          {transitions(({ innerHeight, ...rest }, item) => (
            <StyledAnimatedDiv style={rest} onClick={reset}>
              <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
            </StyledAnimatedDiv>
          ))}
        </StyledMain>
      </StyledContainer>
    )
  }