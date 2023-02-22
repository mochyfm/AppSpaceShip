export type PilotData = {
    token: string;
    user: PilotProfile
}

export type PilotProfile = {
    credits: number,
    joinedAt: string,
    shipCount: number,
    structureCount: number,
    username: string
};

export type PilotErrorObject = {
    error: ErrorMessageObject
}

type ErrorMessageObject = {
    message: string;
    code: string
}