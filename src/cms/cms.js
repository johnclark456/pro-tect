import CMS from "netlify-cms";
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

// import my homemade widget
import { CustomPathImageControl, CustomPathImagePreview } from "./customPathImage.js";

CMS.registerPreviewTemplate('about', AboutPagePreview)

CMS.registerPreviewTemplate('blog', BlogPostPreview)



// register it to be able tu use it in NetlifyCMS
CMS.registerWidget("custompathimage", CustomPathImageControl, CustomPathImagePreview);
let defaultImageWidget = CMS.getWidget("image")
CMS.registerWidget("defaultImageWidget", defaultImageWidget.control, defaultImageWidget.preview);
CMS.registerWidget("image", CustomPathImageControl, CustomPathImagePreview);