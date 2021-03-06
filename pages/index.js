import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import LanguageSelector from '../components/LanguageSelector';
import {useTranslation} from 'react-i18next';
import Head from 'next/head';

const Index = () => {
	const {t} = useTranslation();

	return (
		<div>
			<Head>
				<title>Next.js Internationalization</title>
			</Head>
			<Header/>
			<Banner/>

			<section id="one" className="wrapper style1">
				<div className="container 75%">
					<div className="row 200%">
						<div className="6u 12u$(medium)">
							<header className="major">
								<h2>{t('articleTitle')}</h2>
								<p>{t('articleDescription')}</p>
							</header>
						</div>
						<div className="6u$ 12u$(medium)">
							<p>{t('article1StParagraph')}</p>
							<p>{t('article2NdParagraph')}</p>
						</div>
					</div>
				</div>
			</section>

			<section id="four" className="wrapper style3 special">
				<div className="container">
					<header className="major">
						<p>{t('description')}</p>
					</header>
					<LanguageSelector/>
				</div>
			</section>
		</div>
	);
};

Index.getInitialProps = async () => ({
	namespacesRequired: ['common'],
});

export default Index;
