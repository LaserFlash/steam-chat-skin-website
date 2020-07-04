import { TestBed } from "@angular/core/testing";

import { SteamChatCSSBuilderService } from "./steam-chat-cssbuilder.service";

describe("SteamChatCSSBuilderService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: SteamChatCSSBuilderService = TestBed.get(
      SteamChatCSSBuilderService
    );
    expect(service).toBeTruthy();
  });
});
