using System.Text.Json.Serialization;

namespace Web.Client.Models;

public class SkillsModel
{
    [JsonPropertyName("majorSkills")]
    public required List<SkillModel> MajorSkills { get; set; }
    [JsonPropertyName("minorSkills")]
    public required List<SkillModel> MinorSkills { get; set; }
}