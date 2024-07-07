import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Works
 *
 *
 */
export interface Works extends SanityDocument {
  _type: "works";

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Description — `string`
   *
   *
   */
  description: string;

  /**
   * Project Link — `string`
   *
   *
   */
  projectLink?: string;

  /**
   * Code Link — `string`
   *
   *
   */
  codeLink: string;

  /**
   * ImageUrl — `image`
   *
   *
   */
  imgUrl: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Tags — `array`
   *
   *
   */
  tags: Array<SanityKeyed<string>>;
}

/**
 * Skills
 *
 *
 */
export interface Skills extends SanityDocument {
  _type: "skills";

  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * BgColor — `string`
   *
   *
   */
  bgColor?: string;

  /**
   * Icon — `image`
   *
   *
   */
  icon: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Description — `string`
   *
   *
   */
  description: string;

  /**
   * Tags — `array`
   *
   *
   */
  tags: Array<SanityKeyed<string>>;
}

/**
 * About
 *
 *
 */
export interface About extends SanityDocument {
  _type: "about";

  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Description — `string`
   *
   *
   */
  description: string;

  /**
   * Paragraph — `string`
   *
   *
   */
  paragraph: string;

  /**
   * ImageUrl — `image`
   *
   *
   */
  imgUrl?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * experiences
 *
 *
 */
export interface Experiences extends SanityDocument {
  _type: "Experiences";

  /**
   * TimePeriod — `string`
   *
   *
   */
  timePeriod: string;

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Department — `string`
   *
   *
   */
  department: string;

  /**
   * Website — `string`
   *
   *
   */
  website: string;

  /**
   * ImageUrl — `image`
   *
   *
   */
  imgUrl: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

export type Documents = Works | Skills | About | Experiences;
