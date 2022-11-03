import { Dropdown, Grid, Image } from "@nextui-org/react";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Nav() {
  return (
    <div>
      <div className={styles.outer_navbar_container}>
        <div className={styles.inner_navbar}>
          <div className={styles.brand}>
            <Link href="/">
              <a>
                <Image
                  src="/logo.svg"
                  height={28}
                  width={103}
                  alt="Logo image"
                />
              </a>
            </Link>
          </div>
          <div className={styles.nav_links_container}>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Dropdown flat>
                  <Dropdown.Button
                    flat
                    css={{
                      background: "transparent",
                      color: "white",
                      height: "$11",
                      borderRadius: "0",
                      boxShadow: "0",
                      fontSize: "16px",
                      fontWeight: 500,
                      "&:hover": {
                        background: "transparent",
                        color: "$white",
                      },
                      "&:active": {
                        background: "transparent",
                        color: "$white",
                      },
                      "&:focus": {
                        borderColor: "transparent",
                        background: "transparent",
                        color: "$white",
                      },
                    }}
                  >
                    Roofs
                  </Dropdown.Button>
                  <Dropdown.Menu css={{ $$dropdownMenuWidth: "180px" }}>
                    <Dropdown.Item>
                      <Link href="/Pitched">Pitch Roofs</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/Flat">Flat Roofs</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/Slate">Slate Roofs</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/Conservatory">Conservatory</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/Repair">Roofs Repairs</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/Fibreglass">Fibreglass Roofs</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>Ground Works</li>
              <li>Why Choose Us</li>
            </ul>
          </div>
          <div className={styles.cta_call}>Call 085 256 257</div>
        </div>
      </div>
    </div>
  );
}
