import LoginPage from './authentication/login';

import NoPage from './NoPage/no_page';

// Pages DashBoard
import DashboardPage from './Dashboard';

// page Product
import ListProductsPage from './admin/Products/List-Product';
import CreateProductPage from './admin/Products/Create-Product/create_product';
import DetailProductPage from './admin/Products/Detail-Product/detail_product';

// page Supplier
import ListSuppPage from './admin/Supplier/List_Supp/list_Supp';
import CreateSuppPage from './admin/Supplier/Create_Supp/CreateSuppPage';
import DetailSuppPage from './admin/Supplier/Detail_Supp/DetailSuppPage';

// page reseller
import ListDistPage from './admin/reseller/List_dist/list_dist';
import CreateDistPage from './admin/reseller/Create_dist/CreateDistPage';

// page Transaksi
import ListTransPage from './admin/Transaksi/List Transaction/ListTrans';
import TransaksiMasukPage from './admin/Transaksi/TransaksiMasuk';
import TransaksiKeluarPage from './admin/Transaksi/TransaksiKeluar';

// page Super admin
import ListUserPage from './super_admin/User_Page/List_User';
import CreateUserPage from './super_admin/User_Page/Create_User/create_user';
import DetailUserPage from './super_admin/User_Page/Detail_User/DetailUserPage';

export {LoginPage, NoPage, TransaksiMasukPage, DashboardPage, ListProductsPage, CreateProductPage , DetailProductPage, ListUserPage , CreateUserPage, DetailUserPage, ListDistPage, CreateDistPage, ListSuppPage, CreateSuppPage, TransaksiKeluarPage, DetailSuppPage, ListTransPage};