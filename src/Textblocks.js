export const dealers = {
    title: "Dealers"
}
export const Orders = {
    title: "Orders",
    deleteTitle: "Delete Order",
    quantity: "No Of Products",
    homeHeaders: ["No.", "Client Name", "Order No.", "Quantity", "Start Date", "End Date", "Status"],
    addOrderHeaders: ["No.", "Quantity", "Unit", "Version", "Touch", "P.S", "Warranty", ""],
    addOrderSort: ["quantity", "name", "pref", "warranty"],
    orderHeaders: ["Select", "No.", "quantity", "Unit", "Id", "Problem", "Progress", "Comments", "Status", ""],
    homeTableSort: ['name', 'orderNum', 'quantity', 'creationDate', 'endDate', 'status'],
    orderTableSort: ['quantity', 'name', 'pref', 'problem', 'progress', 'comments', 'status'],
    orderPageHeaderTitles: {
        name: "Name: ",
        phone: "Phone: ",
        startDate: "Start Date: ",
        orderNum: "order Number: #",
        endDate: "End Date:"
    },
    idPopupTitles: {
        version: "Version ",
        ps: "P.S ",
        touch: "Touch "
    },
    returnTitle: "Return"

}
export const addOrderData = {
    dealerTitle: "Dealer Name: "
}
export const popUp = {
    deletePop: {
        title: "Order No. #",
        text: "Are you sure you want to delete this order?"
    }
}
export const unitsOptions = [
    {
        name: "IGHH"
    },
    {
        name: "IGTH"
    }, {
        name: "IGSH"
    }, {
        name: "IGHI"
    }, {
        name: "IGHC"
    },
    {
        name: "IGHK"
    }, {
        name: "IGHS"
    }, {
        name: "IGPH"
    },
]
export const titles = {
    unit: "Unit",
    problems: "Problems",
    version: "Version",
    touch: "Touch",
    ps: "P.S",
    multiple: "Multiple",
    warranty: "Warranty",
    warrantyText: ["NO", "YES"]
}
export const versionOptions = [
    {
        name: 82
    },
    {
        name: 83
    }, {
        name: 84
    }
]
export const touchOptions = [
    {
        name: 2.2
    },
    {
        name: 6
    }, {
        name: 1.3
    }
]
export const PSOptions = [
    {
        name: 632
    },
    {
        name: 62
    }, {
        name: 631
    }
]
export const statusButtons = [
    {name: "Pending", classVal: "status statusPending"},
    {name: "Complete", classVal: "status statusComplete"},
    {name: "Reject", classVal: "status statusReject"}
]
export const editOptions=[
    "ps","version","touch","problems"
]