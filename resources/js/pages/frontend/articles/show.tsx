import FrontLayout from '@/layouts/front/FrontLayout';

import { ArticleShowProps } from '@/types';
import 'swiper/css';
import 'swiper/css/navigation';
export default function Show({ article }: ArticleShowProps) {
    return (
        <FrontLayout>
            <div className="relative h-[280px] w-full bg-cover bg-center md:h-[480px]" style={{ backgroundImage: `url('${article.cover}')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

                <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end p-2">
                    <h1 className="text-white">{article.title}</h1>
                </div>
            </div>

            <div className="mx-auto max-w-6xl py-5">
                <div className="flex flex-col gap-3 px-2 md:flex-row">
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>
            </div>
        </FrontLayout>
    );
}
