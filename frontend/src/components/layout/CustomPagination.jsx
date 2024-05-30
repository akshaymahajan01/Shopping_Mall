import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "react-js-pagination";


const CustomPagination = ({ resPerPage, filteredProductsCount }) => {

    const [currentPage, setCurrentPage] = useState();

    let [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const page = Number(searchParams.get("page")) || 1;

    useEffect(() => {
        setCurrentPage(page);
      }, [page]);
    
      const setCurrentPageNo = (pageNumber) => { // pageno provided by pagination component by react //
        setCurrentPage(pageNumber);
    
        if (searchParams.has("page")) {
          searchParams.set("page", pageNumber);
        } else {
          searchParams.append("page", pageNumber);
        }
                    
        const path = window.location.pathname + "?" + searchParams.toString();
        navigate(path);
      };
    



    return (
        // for center the pegination //
        <div className="d-flex justify-content-center my-5">     
            {filteredProductsCount > resPerPage && (
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resPerPage}
                    totalItemsCount={filteredProductsCount}
                    onChange={setCurrentPageNo}
                    nextPageText={"Next"}
                    prevPageText={"Prev"}
                    firstPageText={"First"}
                    lastPageText={"Last"}
                    itemClass="page-item"  // css //
                    linkClass="page-link"  // css //
                />
            )}
        </div>
    )
}

export default CustomPagination