exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type ContentfulLandingPage implements ContentfulReference & ContentfulEntry & Node @dontInfer {
      name: String
      slug: String
      noIndex: Boolean
      title: String
      description: String
      image: ContentfulAsset @link(by: "id", from: "image___NODE")
      sections: [ContentfulLandingPageSection] @link(by: "id", from: "sections___NODE")

    }

    type ContentfulLandingPageSection implements ContentfulReference & ContentfulEntry & Node  @dontInfer {
      name: String
      component: String
      heading: String
      content: [ContentfulLandingPageContent] @link(by: "id", from: "content___NODE")
      secondaryHeading: String
      image: ContentfulAsset @link(by: "id", from: "image___NODE")
      links: [ContentfulLink] @link(by: "id", from: "links___NODE")
    }

    type ContentfulLandingPageContent implements ContentfulReference & ContentfulEntry & Node @dontInfer {
      name: String
      image: ContentfulAsset @link(by: "id", from: "image___NODE")
      links: [ContentfulLink] @link(by: "id", from: "links___NODE")
      primaryText: contentfulLandingPageContentPrimaryTextTextNode @link(by: "id", from: "primaryText___NODE")
      secondaryText: contentfulLandingPageContentSecondaryTextTextNode @link(by: "id", from: "secondaryText___NODE")
      tertiaryText: contentfulLandingPageContentTertiaryTextTextNode @link(by: "id", from: "tertiaryText___NODE")
      secondaryImages: [ContentfulAsset] @link(by: "id", from: "secondaryImages___NODE")
    }

    type ContentfulLink implements ContentfulReference & ContentfulEntry & Node @dontInfer {
      href: String
      text: String
    }
  `;

  createTypes(typeDefs);
};
