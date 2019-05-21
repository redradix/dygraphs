/**
 * @license
 * Copyright 2006 Dan Vanderkam (danvdk@gmail.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

export interface Tick {
  v: number;
  label: string;
  label_v?: string;
}

export interface DygraphInteractionContext {
  px: number;
  py: number;
  isZooming: boolean;
  isPanning: boolean;
  is2DPan: boolean;
  cancelNextDblclick: boolean;
  initializeMouseDown: (e: Event, dygraph: any, context: any) => void;
}

/**
 * Point structure.
 *
 * xval_* and yval_* are the original unscaled data values,
 * while x_* and y_* are scaled to the range (0.0-1.0) for plotting.
 * yval_stacked is the cumulative Y value used for stacking graphs,
 * and bottom/top/minus/plus are used for error bar graphs.
 */
export interface DygraphPointType {
    idx: number;
    name: string;
    x?: number;
    xval?: number;
    y_bottom?: number;
    y?: number;
    y_stacked?: number;
    y_top?: number;
    yval_minus?: number;
    yval?: number;
    yval_plus?: number;
    yval_stacked?: any;
    annotation?: Annotation;
}

export interface Annotation {
  /** The name of the series to which the annotated point belongs. */
  series: string;

  /**
   * The x value of the point. This should be the same as the value
   * you specified in your CSV file, e.g. "2010-09-13".
   * You must set either x or xval.
   */
  x?: number | string;

  /**
   * numeric value of the point, or millis since epoch.
   */
  xval?: number;

  /**	Text that will appear on the annotation's flag. */
  shortText?: string;

  /** A longer description of the annotation which will appear when the user hovers over it. */
  text?: string;

  /**
   * Specify in place of shortText to mark the annotation with an image rather than text.
   * If you specify this, you must specify width and height.
   */
  icon?: string;

  /**	Width (in pixels) of the annotation flag or icon. */
  width?: number;
  /** Height (in pixels) of the annotation flag or icon. */
  height?: number;

  /**	CSS class to use for styling the annotation. */
  cssClass?: string;

  /**	Height of the tick mark (in pixels) connecting the point to its flag or icon. */
  tickHeight?: number;

  /**	If true, attach annotations to the x-axis, rather than to actual points. */
  attachAtBottom?: boolean;

  div?: HTMLDivElement;

  /** This function is called whenever the user clicks on this annotation. */
  clickHandler?: (annotation: Annotation, point: DygraphPointType, dygraph: DygraphAny, event: MouseEvent) => any;

  /** This function is called whenever the user mouses over this annotation. */
  mouseOverHandler?: (annotation: Annotation, point: DygraphPointType, dygraph: DygraphAny, event: MouseEvent) => any;

  /** This function is called whenever the user mouses out of this annotation. */
  mouseOutHandler?: (annotation: Annotation, point: DygraphPointType, dygraph: DygraphAny, event: MouseEvent) => any;

  /** this function is called whenever the user double-clicks on this annotation. */
  dblClickHandler?: (annotation: Annotation, point: DygraphPointType, dygraph: DygraphAny, event: MouseEvent) => any;
}

// TODO(danvk): this type is incoherent; restructure.
 export interface DygraphAxisType {
   minxval: number;
   maxxval: number;
   minyval: number;
   maxyval: number;
   minval: number;
   maxval: number;
   xlogscale: number;
   ylogscale: number;
   yscale: number;
   xlogrange: number;
   ylogrange: number;
   scale: number;
   yrange: number;
   computedValueRange: [number, number];
   g: DygraphAny;
   ticks: Tick[];
 }

/** Placeholder for TS conversion. Should be Dygraph. */
export type DygraphAny = any;