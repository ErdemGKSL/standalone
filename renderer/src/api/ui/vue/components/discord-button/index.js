import webpack from "../../../../../api/modules/webpack.js";

const buttonClasses = webpack.findByProperties("lowSaturationUnderline", "button", "disabledButtonOverlay");

export default {
  /** @param {import("vue").App} vueApp */
  load(vueApp) {
    vueApp.component("discord-button", {
      template: `
        <div class="${buttonClasses.button} ${buttonClasses.lookFilled} ${buttonClasses.grow}" :class="\`\${buttonClasses[color] ?? buttonClasses.colorBrand} \${buttonClasses[size] ?? buttonClasses.sizeSmall}\`">
          <div class="${buttonClasses.contents}">{{value}}</div>
        </div>
      `,
      props: ["value", "size", "color"],
      data() {
        return {
          buttonClasses
        }
      }
    });
  }
}