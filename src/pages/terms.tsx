import MainLayout from '../layouts';
import Seo from '../component/seo';
import BreadCrunb from '../component/breadCrumb';
import TermsContent from '../component/terms';


function Terms() {
    return (
        <MainLayout>
            <Seo />
            <BreadCrunb itemList={[{name: '規約', path: '/terms'}]} />
            <div>
                <div>
                    <TermsContent />
                </div>
            </div>
        </MainLayout>
    );
}

export default Terms;
