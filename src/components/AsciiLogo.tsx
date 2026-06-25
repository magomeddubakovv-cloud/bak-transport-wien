const ASCII_BAK = `  ____    _    _  __
 | __ )  / \\  | |/ /
 |  _ \\ / _ \\ | ' /
 | |_) / ___ \\| . \\
 |____/_/   \\_\\_|\\_\\`;

export function AsciiLogo() {
  return (
    <pre
      aria-label="BAK Transport Wien"
      style={{
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: "clamp(10px, 1.6vw, 16px)",
        lineHeight: 1.25,
        background: "linear-gradient(90deg, #F07D00 0%, #0F2B5B 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        display: "inline-block",
        margin: 0,
        userSelect: "none",
        fontWeight: "bold",
      }}
    >
      {ASCII_BAK}
    </pre>
  );
}
