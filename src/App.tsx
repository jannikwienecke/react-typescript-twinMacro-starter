import React from 'react'
import { GlobalStyles } from 'twin.macro'
import { ProgressBar } from './components/ProgressBar'

const useProgressBar = () => {
  const [currentMs, setCurrentMs] = React.useState(0)

  return {
    currentMs,
    setCurrentMs,
  }
}

const App = () => {
  return (
    <div tw="bg-gradient-to-r from-red-200 to-red-600 h-screen flex flex-col justify-center">
      <GlobalStyles />
      <h1 tw="text-4xl text-center font-bold text-gray-700">
        TYPESCRIPT TWIN.MACRO START
      </h1>
    </div>
  )
}

export default App
