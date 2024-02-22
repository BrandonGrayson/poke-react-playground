/* Components */
import { Nav } from "./components/Nav";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
      <html lang="en">
        <body>
          <section>
            <main>{props.children}</main>
          </section>
        </body>
      </html>
  );
}
