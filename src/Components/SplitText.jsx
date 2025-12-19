const SplitText = ({ text }) => {
  return (
    <span>
      {text.split('').map((char, i) => (
        <span key={i} className="animate-pulse" style={{animationDelay: `${i * 0.1}s`}}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default SplitText