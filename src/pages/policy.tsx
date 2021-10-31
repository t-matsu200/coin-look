import MainLayout from '../layouts';
import Seo from '../component/seo';
import BreadCrunb from '../component/breadCrumb';
import PolicyContent from '../component/policy';


function Policy() {
    return (
        <MainLayout>
            <Seo />
            <BreadCrunb itemList={[{name: 'ポリシー', path: '/policy'}]} />
            <div>
                <div>
                    <PolicyContent />
                </div>
            </div>
        </MainLayout>
    );
}

export default Policy;
