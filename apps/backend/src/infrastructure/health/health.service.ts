import { Injectable } from '@nestjs/common'
import { HttpHealthIndicator, MemoryHealthIndicator } from '@nestjs/terminus'

@Injectable()
export class HealthService {
  constructor(
    private readonly http: HttpHealthIndicator,
    private readonly memory: MemoryHealthIndicator,
  ) {}

  createTerminusOptions() {
    const healthEndpoint = {
      url: '/health',
      healthIndicators: [
        async () => this.http.pingCheck('google', 'https://google.com'),
        async () => this.memory.checkHeap('memory_heap', 200 * 1024 * 1024),
        async () => this.memory.checkRSS('memory_rss', 3000 * 1024 * 1024),
      ],
    }

    return {
      endpoints: [healthEndpoint],
    }
  }
}
