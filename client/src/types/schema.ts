export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export type Match = {
  matchId: string;
  gameVersion: string;
  gameDuration: number;
  participants: Participant[];
};

export type Participant = {
  ASSISTS: string;
  BOUNTY_LEVEL?: string;
  CHAMPIONS_KILLED: string;
  GOLD_EARNED: string;
  INDIVIDUAL_POSITION: string;
  MINIONS_KILLED: string;
  NAME: string;
  NEUTRAL_MINIONS_KILLED: string;
  NUM_DEATHS: string;
  SKIN: string;
  WIN: string;
};

export interface Database {
  public: {
    Tables: {
      matches: {
        Row: {
          id: number;
          data: Match;
        };
        Insert: {
          id?: number;
          data: Match;
        };
        Update: {
          id?: number;
          data?: Match;
        };
      };
      players: {
        Row: {
          id: number;
          name: string;
          games_won: number;
          games_played: number;
        };
        Insert: {
          id?: number;
          name: string;
          games_won: number;
          games_played: number;
        };
        Update: {
          id?: number;
          name?: string;
          games_won?: number;
          games_played?: number;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      install_available_extensions_and_test: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
