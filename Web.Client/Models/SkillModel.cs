using System.Text.Json.Serialization;

namespace Web.Client.Models;

public class SkillModel
{
    [JsonPropertyName("title")]
    public required string Title { get; set; }
    [JsonPropertyName("comment")]
    public string? Comment { get; set; }
}