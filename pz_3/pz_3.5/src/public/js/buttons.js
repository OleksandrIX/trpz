function editMilitaryUnit(event){
    const button = getButton(event.target);
    const militaryUnitId = button.value;
    location.href = `/military-units/${militaryUnitId}/edit`;
}

function deleteMilitaryUnit(event){
    const button = getButton(event.target);
    const militaryUnitId = button.value;
    fetch(`/military-units/${militaryUnitId}/delete`, {
        method: "delete",
    })
        .then((res) => {
            if (res.status === 200) {
                location.reload();
            }else {
                console.log(res.status)
            }
        })
        .catch((error) => {
            console.log(error);
        });

}

function editUnit(event) {
    const button = getButton(event.target);
    const url = location.href.split("/");
    const militaryUnitId = url[url.indexOf("military-units") + 1];
    const [unitId] = button.value.split("-");
    location.href = `/military-units/${militaryUnitId}/units/${unitId}/edit`;
}

function deleteUnit(event) {
    const button = getButton(event.target);
    const url = location.href.split("/");
    const militaryUnitId = url[url.indexOf("military-units") + 1];
    const [unitId] = button.value.split("-");
    fetch(`/military-units/${militaryUnitId}/units/${unitId}/delete`, {
        method: "delete",
    })
        .then((res) => {
            if (res.status === 200) {
                location.reload();
            }else {
                console.log(res.status)
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function editServiceman(event) {
    const button = getButton(event.target);
    const url = location.href.split("/");
    const militaryUnitId = url[url.indexOf("military-units") + 1];
    const [servicemanId, unitId] = button.value.split("-");
    location.href = `/military-units/${militaryUnitId}/units/${unitId}/servicemans/${servicemanId}/edit`;
}

function deleteServiceman(event) {
    const button = getButton(event.target);
    const url = location.href.split("/");
    const militaryUnitId = url[url.indexOf("military-units") + 1];
    const [servicemanId, unitId] = button.value.split("-");
    fetch(`/military-units/${militaryUnitId}/units/${unitId}/servicemans/${servicemanId}/delete`, {
        method: "delete",
    })
        .then((res) => {
            if (res.status === 200) {
                location.reload();
            }else {
                console.log(res.status)
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function getButton(node) {
    let currentNode = node;
    if (currentNode.tagName === "BUTTON") {
        return currentNode;
    } else {
        return getButton(currentNode.parentNode);
    }
}