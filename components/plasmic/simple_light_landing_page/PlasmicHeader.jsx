// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: doqqBYaWyoDkH95Fx1Fcw5
// Component: lMgI0yXdacd
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: 20t1qijZHMeb/component
import { useScreenVariants as useScreenVariantsezDhBpsZrQd8 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: EzDhBpsZrQd8/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: doqqBYaWyoDkH95Fx1Fcw5/projectcss
import * as sty from "./PlasmicHeader.module.css"; // plasmic-import: lMgI0yXdacd/css
import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: kvhzFbMVyF6d/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: -5RNPNzkJDcU/icon

export const PlasmicHeader__VariantProps = new Array();

export const PlasmicHeader__ArgProps = new Array();

function PlasmicHeader__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsezDhBpsZrQd8()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.a, sty.link)}
        component={Link}
        href={"/"}
        platform={"nextjs"}
      >
        <LogoIcon
          className={classNames(projectcss.all, sty.svg__uo2WZ)}
          role={"img"}
        />
      </p.PlasmicLink>

      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <Button
          className={classNames("__wab_instance", sty.button__bl8U7)}
          color={"clear"}
          link={"/features"}
          size={"compact"}
        >
          {"Features"}
        </Button>

        <Button
          className={classNames("__wab_instance", sty.button__cpkTx)}
          color={"clear"}
          link={"/pricing"}
          size={"compact"}
        >
          {"Pricing"}
        </Button>

        <Button
          className={classNames("__wab_instance", sty.button___140Mv)}
          color={"clear"}
          size={"compact"}
        >
          {"Sign in"}
        </Button>

        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <Button
            className={classNames("__wab_instance", sty.button__rvx9)}
            endIcon={
              <RightArrowIcon
                className={classNames(projectcss.all, sty.svg__w3Mq7)}
                role={"img"}
              />
            }
            showEndIcon={"showEndIcon"}
          >
            {"Sign up"}
          </Button>
        ) : null}
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "link", "freeBox"],
  link: ["link"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
