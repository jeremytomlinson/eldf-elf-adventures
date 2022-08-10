// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: doqqBYaWyoDkH95Fx1Fcw5
// Component: n_vBK1v_NBk
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: doqqBYaWyoDkH95Fx1Fcw5/projectcss
import * as sty from "./PlasmicFeatureCard.module.css"; // plasmic-import: n_vBK1v_NBk/css

export const PlasmicFeatureCard__VariantProps = new Array("long");

export const PlasmicFeatureCard__ArgProps = new Array(
  "iconFront",
  "title",
  "description",
  "iconBack"
);

function PlasmicFeatureCard__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__long]: hasVariant(variants, "long", "long")
      })}
    >
      {(hasVariant(variants, "long", "long") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__otdlO, {
            [sty.freeBox__long__otdlO9LRfs]: hasVariant(
              variants,
              "long",
              "long"
            )
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__soDyT, {
              [sty.freeBox__long__soDyT9LRfs]: hasVariant(
                variants,
                "long",
                "long"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <svg
                  className={classNames(projectcss.all, sty.svg__mIov)}
                  role={"img"}
                />
              ),

              value: args.iconFront
            })}
          </div>
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___3TDyz, {
          [sty.freeBox__long___3TDyz9LRfs]: hasVariant(variants, "long", "long")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Title",
          value: args.title,
          className: classNames(sty.slotTargetTitle, {
            [sty.slotTargetTitle__long]: hasVariant(variants, "long", "long")
          })
        })}

        {p.renderPlasmicSlot({
          defaultContents:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          value: args.description,
          className: classNames(sty.slotTargetDescription, {
            [sty.slotTargetDescription__long]: hasVariant(
              variants,
              "long",
              "long"
            )
          })
        })}
      </p.Stack>

      {(hasVariant(variants, "long", "long") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__zq83U, {
            [sty.freeBox__long__zq83U9LRfs]: hasVariant(
              variants,
              "long",
              "long"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg__vFzbF)}
                role={"img"}
              />
            ),

            value: args.iconBack
          })}
        </div>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFeatureCard__ArgProps,
      internalVariantPropNames: PlasmicFeatureCard__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicFeatureCard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatureCard";
  } else {
    func.displayName = `PlasmicFeatureCard.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatureCard = Object.assign(
  // Top-level PlasmicFeatureCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicFeatureCard
    internalVariantProps: PlasmicFeatureCard__VariantProps,
    internalArgProps: PlasmicFeatureCard__ArgProps
  }
);

export default PlasmicFeatureCard;
/* prettier-ignore-end */