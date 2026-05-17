import type { SchemaTypeDefinition } from "sanity";

import { siteSettings } from "./documents/siteSettings";
import { homePage } from "./documents/homePage";
import { merlinPage } from "./documents/merlinPage";
import { devicesPage } from "./documents/devicesPage";
import { platformPage } from "./documents/platformPage";
import { solutionsPage } from "./documents/solutionsPage";
import { roiPage } from "./documents/roiPage";
import { companyPage } from "./documents/companyPage";
import { contactPage } from "./documents/contactPage";
import { agentsPage } from "./documents/agentsPage";
import { statusPage } from "./documents/statusPage";

import { ctaButton } from "./objects/ctaButton";
import { navLink } from "./objects/navLink";
import { trait } from "./objects/trait";
import { useCase } from "./objects/useCase";
import { sensorSpec } from "./objects/sensorSpec";
import { featureBadge } from "./objects/featureBadge";
import { simpleSection } from "./objects/simpleSection";
import { metric } from "./objects/metric";
import { teamMember } from "./objects/teamMember";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  homePage,
  merlinPage,
  devicesPage,
  platformPage,
  solutionsPage,
  roiPage,
  companyPage,
  contactPage,
  agentsPage,
  statusPage,
  ctaButton,
  navLink,
  trait,
  useCase,
  sensorSpec,
  featureBadge,
  simpleSection,
  metric,
  teamMember,
];
