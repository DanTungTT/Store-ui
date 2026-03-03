import * as config from "~/config"
import { Home, Login, SellerChannel,  BecomeASeller, Support, Register,
     ProductInternational, DealHot, LoyalCustomer, DiscountCode, SeoStyle, SeoProcessing } from "~/pages";

export const publicRouter = [
    {path: config.routes.home, element: Home},
    {path: config.routes.sellerChannel, element: SellerChannel},
    {path: config.routes.becomeASeller, element: BecomeASeller},
    {path: config.routes.support, element: Support},
    {path: config.routes.register, element: Register},
    {path: config.routes.login, element: Login},
    // body
    {path: config.routes.dealHot, element: DealHot},
    {path:config.routes.productInternational, element: ProductInternational},
    {path:config.routes.loyalCustomer, element: LoyalCustomer},
    {path:config.routes.discountCode, element: DiscountCode},
    {path:config.routes.seoStyle, element: SeoStyle},
    {path:config.routes.seoProcessing, element: SeoProcessing},
] 

export const privateRoter = []
