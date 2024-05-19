import Navbar from "@components/Navbar";
import Typography from "@components/Typography";

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1>Paso Home</h1>
      {/* typography exampe  */}
      <Typography type="heading" level={1} size="xlarge" weight="bold">
        Paso Home
      </Typography>
      <Typography type="paragraph" size="medium" weight="normal">
        Welcome to the Paso Home page
      </Typography>
      <Typography type="heading" level={2} size="large" weight="bold">
        Services
      </Typography>
      <Typography type="text" size="small" weight="normal">
        - Service 1: Description of service 1
      </Typography>
      <Typography type="paragraph" size="small" weight="normal">
        For more information, please contact us
      </Typography>
    </main>
  );
}
