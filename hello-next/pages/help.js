export default function About() {
  return (
    <>
      <iframe title="help" src="http://localhost:8080/"></iframe>
      <style jsx global>{`
      html,
      body,
      :root {
        height: 100%;
      }
      iframe {
        border: 0;
        width: 100%;
        height: 100vh;
      }
    `}</style>
    </>
  );
}