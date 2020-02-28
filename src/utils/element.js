import {
  Input,
  Loading,
  Carousel,
  CarouselItem,
  Table,
  TableColumn,
  Pagination,
  Message,
  Tabs,
  TabPane
} from 'element-ui';

export default {
  install(Vue) {
    Vue.use(Input);
    Vue.use(Loading);
    Vue.use(Carousel);
    Vue.use(CarouselItem);
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Pagination);
    Vue.use(Tabs);
    Vue.use(TabPane);
    Vue.prototype.$message = Message;
  }
};
