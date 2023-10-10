import React, { UseState, useEffect } from 'react';

import axios from 'axios';

import { Button, Form, Container, Modal } from 'react-bootstrap';

import Entry from "./single-entry.component";

const Entries = () => {

    return (
        <div>
            <Container>
                <Button onClick={() => setAddNewEntry(true)}>Track today's calories</Button>

            </Container>
            <Container>
                {entries !== null && entries.map((entry, i) => (
                    <Entry entryData={entry} deleteSingleEntry={deleteSingleEntry} setChangeIngredient={setChangeIngredient} setChangeEntry={setChangeEntry} />
                ))}
            </Container>
        </div>
    );
};

function addSingleEntry() {
    setAddNewEntry(false);
    var url = 'http://localhost:8000/entry/create';
    axios.post(url, {
        "dish": newEntry.dish,
        "ingredients": newEntry.ingredients,
        "calories": newEntry.calories,
        "protein": newEntry.protein,
        "carbs": newEntry.carbs,
        "fat": parseFloat(newEntry.fat)
    }).then((response) => {
        if (response.status == 200) {
            setRefreshData(true);
        }
    })
}

function deleteSingleEntry(id) {
    var url = 'http://localhost:8000/entry/delete' + id;
    axios.delete(url, {
        "id": id
    }).then((response) => {
        if (response.status == 200) {
            setRefreshData(true);
        }
    })
}