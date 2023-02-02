import { useCallback, useRef, useState } from 'react'

interface UseTimer {
  handlePause: () => void
  handleReset: () => void
  handleResume: () => void
  handleStart: () => void
  isActive: boolean
  isPaused: boolean
  timer: number
}

const useTimer = (initialState = 0): UseTimer => {
  const [timer, setTimer] = useState<number>(initialState)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const countRef = useRef<NodeJS.Timer | null>(null)

  const handleStart = useCallback((): void => {
    setIsActive(true)
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1)
    }, 1000)
  }, [])

  const handlePause = useCallback((): void => {
    if (countRef.current) {
      clearInterval(countRef.current)
    }
    setIsPaused(false)
  }, [])

  const handleResume = useCallback((): void => {
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1)
    }, 1000)
  }, [])

  const handleReset = useCallback((): void => {
    if (countRef.current) {
      clearInterval(countRef.current)
    }
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }, [])

  return { handlePause, handleReset, handleResume, handleStart, isActive, isPaused, timer }
}

export default useTimer
