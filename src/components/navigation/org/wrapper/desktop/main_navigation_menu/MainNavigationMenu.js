import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import "./styles.css";
import { NavLink, useHistory } from "react-router-dom";
import { recordMouseEnter } from "../../../../../../utils/analytics";

const MainNavigationMenu = (props) => {
  const history = useHistory();
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        {props.signedIn && (
          <>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="NavigationMenuLink"
                onClick={() => history.push("/")}
              >
                Home
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </>
        )}

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

export default MainNavigationMenu;
