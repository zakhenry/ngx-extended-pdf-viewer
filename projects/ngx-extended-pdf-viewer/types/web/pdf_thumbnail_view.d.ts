export type IL10n = import("./interfaces").IL10n;
export type IPDFLinkService = import("./interfaces").IPDFLinkService;
export type IRenderableView = import("./interfaces").IRenderableView;
export type PDFRenderingQueue = import("./pdf_rendering_queue").PDFRenderingQueue;
export type PDFThumbnailViewOptions = {
    /**
     * - The viewer element.
     */
    container: HTMLDivElement;
    /**
     * - The thumbnail's unique ID (normally its number).
     */
    id: number;
    /**
     * - The page viewport.
     */
    defaultViewport: any;
    /**
     * -
     * A promise that is resolved with an {@link OptionalContentConfig } instance.
     * The default value is `null`.
     */
    optionalContentConfigPromise?: Promise<any> | undefined;
    /**
     * - The navigation/linking service.
     */
    linkService: IPDFLinkService;
    /**
     * - The rendering queue object.
     */
    renderingQueue: PDFRenderingQueue;
    checkSetImageDisabled: Function;
    /**
     * - Localization service.
     */
    l10n: IL10n;
};
/**
 * @implements {IRenderableView}
 */
export class PDFThumbnailView implements IRenderableView {
    /**
     * @param {PDFThumbnailViewOptions} options
     */
    constructor({ container, id, defaultViewport, optionalContentConfigPromise, linkService, renderingQueue, checkSetImageDisabled, l10n, }: PDFThumbnailViewOptions);
    id: number;
    renderingId: string;
    pageLabel: string | null;
    pdfPage: any;
    rotation: number;
    viewport: any;
    pdfPageRotate: any;
    _optionalContentConfigPromise: Promise<any> | null;
    linkService: import("./interfaces").IPDFLinkService;
    renderingQueue: import("./pdf_rendering_queue").PDFRenderingQueue;
    renderTask: any;
    renderingState: number;
    resume: (() => void) | null;
    _checkSetImageDisabled: Function;
    canvasWidth: number;
    canvasHeight: number;
    scale: number;
    l10n: import("./interfaces").IL10n;
    createThumbnail(pdfThumbnailView: any, linkService: any, id: any, container: any, thumbPageTitlePromise: any): void;
    setPdfPage(pdfPage: any): void;
    reset(): void;
    update({ rotation }: {
        rotation?: null | undefined;
    }): void;
    /**
     * PLEASE NOTE: Most likely you want to use the `this.reset()` method,
     *              rather than calling this one directly.
     */
    cancelRendering(): void;
    /**
     * @private
     */
    private _getPageDrawContext;
    /**
     * @private
     */
    private _convertCanvasToImage;
    image: HTMLImageElement | undefined;
    draw(): any;
    setImage(pageView: any): void;
    /**
     * @private
     */
    private _reduceImage;
    get _thumbPageTitle(): Promise<string>;
    get _thumbPageCanvas(): Promise<string>;
    /**
     * @param {string|null} label
     */
    setPageLabel(label: string | null): void;
}
/**
 * @typedef {Object} PDFThumbnailViewOptions
 * @property {HTMLDivElement} container - The viewer element.
 * @property {number} id - The thumbnail's unique ID (normally its number).
 * @property {PageViewport} defaultViewport - The page viewport.
 * @property {Promise<OptionalContentConfig>} [optionalContentConfigPromise] -
 *   A promise that is resolved with an {@link OptionalContentConfig} instance.
 *   The default value is `null`.
 * @property {IPDFLinkService} linkService - The navigation/linking service.
 * @property {PDFRenderingQueue} renderingQueue - The rendering queue object.
 * @property {function} checkSetImageDisabled
 * @property {IL10n} l10n - Localization service.
 */
export class TempImageFactory {
    static "__#4@#tempCanvas": null;
    static getCanvas(width: any, height: any): (HTMLCanvasElement | CanvasRenderingContext2D | null)[];
    static destroyCanvas(): void;
}
