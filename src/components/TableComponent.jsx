import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";

const TableComponent = ({ data }) => {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    image: { value: null, matchMode: FilterMatchMode.CONTAINS },
    firstName: { value: null, matchMode: FilterMatchMode.CONTAINS },
    lastName: { value: null, matchMode: FilterMatchMode.CONTAINS },
    birthPlace: { value: null, matchMode: FilterMatchMode.CONTAINS },
    birthday: { value: null, matchMode: FilterMatchMode.CONTAINS },
    club: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const globalFilterFields = [
    "firstName",
    "lastName",
    "birthPlace",
    "birthday",
    "club",
  ];

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={rowData.image}
        alt="User"
        style={{ width: "50px", height: "50px" }}
      />
    );
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  return (
    <div className="table-container">
      <div className="global-filter-container">
        <InputText
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Genel Arama"
        />
      </div>
      <DataTable
        value={data}
        filters={filters}
        sortMode="multiple"
        className="p-datatable-gridlines"
        filterDisplay="row"
        paginator
        rows={10}
        globalFilterFields={globalFilterFields}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Toplam {totalRecords} kayıttan {first} ile {last} arası gösteriliyor"
      >
        <Column
          field="image"
          header="Resim"
          body={imageBodyTemplate}
          showFilterMenu={false}
        ></Column>
        <Column
          field="firstName"
          header="İsim"
          sortable
          filter
          showFilterMenu={false}
          filterPlaceholder="İsimle Ara...."
        ></Column>
        <Column
          field="lastName"
          header="Soyisim"
          sortable
          filter
          showFilterMenu={false}
          filterPlaceholder="Soyisimle Ara..."
        ></Column>
        <Column
          field="birthPlace"
          header="Doğum Yeri"
          sortable
          filter
          showFilterMenu={false}
          filterPlaceholder="Doğum Yeri ile Ara"
        ></Column>
        <Column
          field="birthday"
          header="Doğum Tarihi"
          sortable
          filter
          showFilterMenu={false}
          filterPlaceholder="Doğum Tarihi ile Ara..."
        ></Column>
        <Column
          field="club"
          header="Takım"
          sortable
          filter
          showFilterMenu={false}
          filterPlaceholder="Takım ile Ara..."
        ></Column>
      </DataTable>
    </div>
  );
};

export default TableComponent;
