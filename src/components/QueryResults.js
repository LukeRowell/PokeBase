import React from 'react';
import bulbaIcon from '../img/bulbapedia_favicon.ico'

function QueryResults() {
    return (
        <div className="QueryResults">
                <div>
                <table className="labels" cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th width="6%">
                                <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page">
                                    <img id="bulbapedia" src={bulbaIcon} alt={"bulbaIcon"}></img>
                                </a>
                            </th>
                            <th width="4%">#</th>
                            <th width="20%">Name</th> 
                            <th width="10%">Type 1</th>
                            <th width="10%">Type 2</th>
                            <th width="7%">HP</th>
                            <th width="7%">Atk</th>
                            <th width="7%">Def</th>
                            <th width="7%">Sp. Atk.</th>
                            <th width="7%">Sp. Def.</th>
                            <th width="7%">Speed</th>
                            <th width="8%">Total</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="list_scroll">
                <table className="results" id="results" cellSpacing="0" cellPadding="0">
                    <tbody id="body"></tbody>
                </table>
            </div>
        </div>
    );
}

export default QueryResults;