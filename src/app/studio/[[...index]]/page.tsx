import { NextStudio } from 'next-sanity/studio'

export const dynamic = 'force-static';
export function generateStaticParams() {
    return [{ index: [] }];
}
import config from '../../../../sanity.config'

export default function StudioPage() {
    return <NextStudio config={config} />
}
