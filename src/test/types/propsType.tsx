export interface TestProps {
    'data-testid'?: string; // Tipo para data-testid
}

export interface CustomeProps extends TestProps {
    bold?: boolean;
}