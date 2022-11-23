// Component Header
import Header from './header';
import NavBar from './navbar';

// Component Login
import LoginMain from './Login/login';

// DashBoard
import ListCardDashboard from './Dashboard/List Card/ListCard';

// --Component Admin Page
// Component Transaction
import TransaksiMasuk from './Transaksi/TransaksiMasuk';
import TransaksiKeluar from './Transaksi/TransaksiKeluar';
import ListTrans from './Transaksi/ListTrans';
// Component Product
import CardListProduct from './Product/card-list/card-list';
import CreateProduct from './Product/CreateProduct/CreateProduct';
import DetailProduct from './Product/DetailProduct/DetailProduct';

// Component reseller
import CardListDist from './reseller/card-list/ListCard';
import CreateDistributor from './reseller/create-dist/create_dist';
// Component Supplier
import ProfileSupp from './Supplier/DetailSupp/ProfileSupplier';
import EditSupp from './Supplier/DetailSupp/EditSupp';
import RecentTransaction from './Supplier/DetailSupp/RecentTrans';
import ListProBySupp from './Supplier/DetailSupp/ListProBySupp';
import CreateSupplier from './Supplier/create-supp/CreateSupp';
import CardListSupp from './Supplier/list-card/list_card';
import CreateSupp from './Supplier/create-supp/CreateSupp';

// --Component Super Admin
import ListUser from './User/list_user/ListUser';
import ProfileCard from './User/detail-user/ProfileCard';
import LogActivityUser from './User/detail-user/LogActivity';
import EditUser from './User/detail-user/EditUser';

export { LoginMain, Header, NavBar, TransaksiMasuk, CardListProduct, ListUser, CardListSupp, ProfileCard, CreateSupp, DetailProduct, CardListDist, CreateDistributor, CreateSupplier, CreateProduct, TransaksiKeluar, LogActivityUser, EditUser, ProfileSupp, EditSupp, RecentTransaction, ListProBySupp, ListCardDashboard, ListTrans };