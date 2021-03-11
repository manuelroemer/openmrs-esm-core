import { addSvg } from "../svg-utils";

export function setupLogo() {
  const fullLogo = require("./openmrs-logo-full.svg");

  addSvg("omrs-logo-full-color", fullLogo);
  addSvg("omrs-logo-full-mono", fullLogo);
  addSvg("omrs-logo-full-grey", fullLogo);

  const partialLogo = require("./openmrs-logo-partial.svg");

  addSvg("omrs-logo-partial-color", partialLogo);
  addSvg("omrs-logo-partial-mono", partialLogo);
  addSvg("omrs-logo-partial-grey", partialLogo);

  const iconLogo = require("./openmrs-logo-icon.svg");

  addSvg("omrs-logo-icon-color", iconLogo);
  addSvg("omrs-logo-icon-mono", iconLogo);
  addSvg("omrs-logo-icon-grey", iconLogo);
}
