// app/not-found.js

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <p style={styles.message}>Sorry, this page doesn’t exist.</p>
      <a href="/" style={styles.link}>
        Return Home
      </a>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
    backgroundColor: "#f5f5f5",
  },
  code: {
    fontSize: "5rem",
    margin: 0,
    color: "#d32f2f",
  },
  message: {
    fontSize: "1.5rem",
    margin: "1rem 0",
  },
  link: {
    color: "#0070f3",
    textDecoration: "underline",
  },
};
