import AppLayout from "@src/components/AppLayout";
import AllCategorySection from "@src/components/PageFragments/AllCategorySection";
import SortedProducts from "./(Home)/_components/SortedProducts";
import { SEODATA } from "@constants/seoContants";
import { Metadata } from "next";
import NewCollections from "@src/components/NewCollections";

const { description, title } = SEODATA.home;
export const metadata: Metadata = {
	title: title,
	description: description,
	icons: SEODATA.defaultOGImage,
	openGraph: {
		images: [
			{
				url: SEODATA.defaultOGImage,
			},
		],
	},
};

const page = () => {
	return (
		<AppLayout className="className='pt-10 mx-auto max-w-[1256px] mt-20 max-sm:mt-22">
			<AllCategorySection />
			<div className='mt-4 sm:mt-10'>
				<SortedProducts />
			</div>
		</AppLayout>
	);
};

export default page;
