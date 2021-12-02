// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: doqqBYaWyoDkH95Fx1Fcw5
// Component: dG6JOly9nPQ
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: guYt0oG3Lnxr/component
import Button from "../../Button"; // plasmic-import: 20t1qijZHMeb/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: EzDhBpsZrQd8/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: doqqBYaWyoDkH95Fx1Fcw5/projectcss
import * as sty from "./PlasmicHomeCta.module.css"; // plasmic-import: dG6JOly9nPQ/css
import SphereIcon from "./icons/PlasmicIcon__Sphere"; // plasmic-import: oKlzkj_C5s3-/icon

export const PlasmicHomeCta__VariantProps = new Array();

export const PlasmicHomeCta__ArgProps = new Array();

function PlasmicHomeCta__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.all,
        projectcss.root_reset,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(
          defaultcss.all,
          projectcss.all,
          sty.freeBox__hT5Da
        )}
      >
        <div
          className={classNames(
            defaultcss.all,
            projectcss.all,
            defaultcss.__wab_text,
            sty.text__mDsy
          )}
        >
          {"Powering your business"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            projectcss.all,
            defaultcss.__wab_text,
            sty.text__z4NBd
          )}
        >
          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
          }
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.freeBox__mFb3R
          )}
        >
          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            className={classNames("__wab_instance", sty.textInput)}
            color={"dark"}
            placeholder={"Your email..."}
          />

          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
            color={"blue"}
          >
            {"Subscribe"}
          </Button>
        </p.Stack>

        <div
          className={classNames(
            defaultcss.all,
            projectcss.all,
            defaultcss.__wab_text,
            sty.text__adfzX
          )}
        >
          {"7 days free trial. No credit card required."}
        </div>
      </p.Stack>

      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div
          className={classNames(
            defaultcss.all,
            projectcss.all,
            sty.freeBox__dlP8I
          )}
        >
          <SphereIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, projectcss.all, sty.svg)}
            role={"img"}
          />
        </div>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "textInput", "button", "svg"],
  textInput: ["textInput"],
  button: ["button"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomeCta__ArgProps,
      internalVariantPropNames: PlasmicHomeCta__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicHomeCta__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeCta";
  } else {
    func.displayName = `PlasmicHomeCta.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeCta = Object.assign(
  // Top-level PlasmicHomeCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicHomeCta
    internalVariantProps: PlasmicHomeCta__VariantProps,
    internalArgProps: PlasmicHomeCta__ArgProps
  }
);

export default PlasmicHomeCta;
/* prettier-ignore-end */
