import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProductCategoryRow from "../ProductCategoryRow";
import ProductRow from "../ProductRow";

class ProductTable extends Component {

  // 用于对数组中的元素进行去重
  unique = (arr) => {
    return Array.from(new Set(arr));
  };

  render() {
    // 获得product的所有category
    const categorys = this.props.products.map((product) => {
      return product.category;
    });

    // 取到category去重之后的数组值
    let cateArr = this.unique(categorys);
    console.log("cateArr is: " + cateArr);

    // 根据不同的category来渲染ProductCategoryRow和相应的ProductRow
    const productGroup = cateArr.map((cate) => {
      // 得到每个cate对应的productList
      let productList;
      if (this.props.isStockOnly) {
        productList = this.props.products.filter((product) => {
          return product.category === cate && product.stocked === true;
        });
      } else {
        productList = this.props.products.filter((product) => {
          return product.category === cate;
        });
      }

      // 根据filterText来对productList进行遍历和过滤（也可以使用正则表达式）
      let productFiltered = productList;
      if (this.props.filterText !== '') {
        productFiltered = productList.filter((product) => {
          // 使用正则表达式匹配
          // let reg = new RegExp("");
          // return reg.test(product.name);

          // 使用String对象的search方法进行匹配
          return -1 !== product.name.search(this.props.filterText);
        });
      }

      return (
        <React.Fragment>
          <ProductCategoryRow category={cate}/>
          {
            productFiltered.map((product) => {
                return <ProductRow
                  key={product.id}
                  name={product.name}
                  price={product.price}/>;
              }
            )
          }
        </React.Fragment>
      )
    });

    // 加入state更新之前
    // const productGroup = cateArr.map((cate) => {
    //   // 得到每个cate对应的productList
    //   const productList = this.props.products.filter((product) => {
    //     return product.category === cate;
    //   });
    //
    //   return (
    //     <React.Fragment>
    //       <ProductCategoryRow category={cate}/>
    //       {
    //         productList.map((product) => {
    //             return <ProductRow
    //               key={product.id}
    //               name={product.name}
    //               price={product.price}/>;
    //           }
    //         )
    //       }
    //     </React.Fragment>
    //   )
    // });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productGroup}
        </tbody>
      </table>
    )
  }
}

export default ProductTable;
