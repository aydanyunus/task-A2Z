import { floor, pommel, rings, vt, pbar, hbar } from "../assets";
import resultsData from '../mock/results.json';
import live from '../mock/live.json';

export const tabs = [
    {
        id: "live",
        name: "Live",
        content: live
    },
    {
        id: "startlist",
        name: "Startlist"
    },
    {
        id: "schedule",
        name: "Schedule"
    },
    {
        id: "results",
        name: "Results",
        content: resultsData
    },
    {
        id: "medals",
        name: "Medals"
    },
]

export const icons = [
    {
        id: "icon-1",
        img: floor
    },
    {
        id: "icon-2",
        img: pommel
    },
    {
        id: "icon-3",
        img: rings
    },
    {
        id: "icon-4",
        img: vt
    },
    {
        id: "icon-5",
        img: pbar
    },
    {
        id: "icon-6",
        img: hbar
    },
]


export const filterTabs = [
    [
        { name: 'MAG', selected: true },
        { name: 'WAG', selected: false }
    ],
    [
        { name: 'Qualification', selected: false },
        { name: 'Final', selected: true }
    ],
    [
        { name: 'Apparatus', selected: true },
        { name: 'Team', selected: false },
        { name: 'All-around', selected: false }
    ],
    [
        { name: 'Seniors', selected: true },
        { name: 'Juniors', selected: false }
    ]
]


export const tableHead = [
    {
        title: "Rank"
    },
    {
        title: "Team"
    },
    {
        title: "Bib"
    },
    {
        title: "Name"
    },
    {
        title: "D"
    },
    {
        title: "E"
    },
    {
        title: "Pen"
    },
    {
        title: "Total"
    },
]

export const liveTableHead = [
    {
        title: "App"
    },
    {
        title: "AA"
    },
    {
        title: "Team"
    },
]


export const mobileFilter = [
    { name: "MAG" },
    { name: "Qualification" },
    { name: "Seniors" },
    { name: "Apparatus" },
    { name: "Floor exercise" }


]