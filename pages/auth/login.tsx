import { Seo } from "@/components/seo"
import { ISeoData } from "@/models/seo"
import { Box } from "@mui/material"

const SEO_DATA: ISeoData = {
    title: 'EVENTs',
    description: 'EVENTs - Công ty bán vé sự kiện hàng đầu của Việt Nam. Chúng tôi có...',
    url: '',
    thumbnailUrl: ''
}

export default function Login() {

    return (
        <Box>
            <Seo data={SEO_DATA} />

            <h1 className="text-xs-center">Sign in</h1>
        </Box>
    )
}