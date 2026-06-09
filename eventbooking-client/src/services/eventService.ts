import api from './api';

export interface EventDto {
  id: number;
  title: string;
  description: string;
  date: string;
  capacity: number;
  venueName: string;
}

export interface CreateEventDto {
  title: string;
  description: string;
  date: string;
  capacity: number;
  venueId: number;
}

export interface VenueDto {
  id: number;
  name: string;
  address: string;
}

export interface CategoryDto {
  id: number;
  name: string;
}

export const eventService = {
  async getAllEvents(): Promise<EventDto[]> {
    const response = await api.get<EventDto[]>('/events');
    return response.data;
  },

  async createEvent(dto: CreateEventDto): Promise<EventDto> {
    const response = await api.post<EventDto>('/events', dto);
    return response.data;
  },

  async getAllVenues(): Promise<VenueDto[]> {
    const response = await api.get<VenueDto[]>('/venues');
    return response.data;
  },

  async getAllCategories(): Promise<CategoryDto[]> {
    const response = await api.get<CategoryDto[]>('/categories');
    return response.data;
  },
};
