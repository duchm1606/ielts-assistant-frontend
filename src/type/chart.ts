export interface IDiagramInfoDetail {
    chartType: string;
    title: string;
    xAxis?: string;
    yAxis?: string;
    dataKey: string[];
    data: any[];
}

export interface IWritingTestInfo {
    title: string;
    instruction: string;
    type: string;
    diagrams: IDiagramInfoDetail[];
}
