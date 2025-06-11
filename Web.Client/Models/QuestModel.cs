using System.Text.Json.Serialization;

namespace Web.Client.Models;

public class QuestModel
{
    [JsonPropertyName("title")] public required string Title { get; set; }
    [JsonPropertyName("iconClass")] public required string IconClass { get; set; }
    [JsonPropertyName("subtitle")] public required string Subtitle { get; set; }
    [JsonPropertyName("descriptionShort")] public required string DescriptionShort { get; set; }
    [JsonPropertyName("description")] public required string Description { get; set; }
    [JsonPropertyName("expReward")] public required int ExpReward { get; set; }
    [JsonPropertyName("rewards")] public required List<string> Rewards { get; set; }
    [JsonPropertyName("imagePath")] public required string ImagePath { get; set; }
    [JsonPropertyName("links")] public required Dictionary<string, string> Links { get; set; }
}