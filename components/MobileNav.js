import styles from "./mobilenav.module.css";
import { Navbar, Link, Image } from "@nextui-org/react";

export default function MobileNav() {
  return (
    <div>
      <div className={styles.mobile_nav_container}>
        <Navbar
          variant="sticky"
          css={{
            $$navbarBackgroundColor: "#223b40",
            $$navbarBlurBackgroundColor: "$colors$green",
            line: "white",
          }}
        >
          <Navbar.Brand>
            <Navbar.Toggle
              aria-label="toggle navigation"
              css={{ $$navbarTextColor: "#ffff" }}
            />
            <div className={styles.logo_container}>
              <Image src="/logo.svg" height="28" width={103} alt="Logo image" />
            </div>
          </Navbar.Brand>
          <Navbar.Content
            enableCursorHighlight
            hideIn="xs"
            variant="underline"
          ></Navbar.Content>
          {/* <Navbar.Content>
            <Navbar.Item>Call Us:</Navbar.Item>
          </Navbar.Content> */}
          <Navbar.Collapse
            css={{ $$navbarListBlurBackgroundColor: "#223b40", line: "#ffff" }}
          >
            <Navbar.CollapseItem>
              <div>
                <Link href="/about">Home</Link>
                <Link>IIIsss</Link>
              </div>
            </Navbar.CollapseItem>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
